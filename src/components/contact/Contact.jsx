import emailjs from '@emailjs/browser'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Contact = () => {
  return (
    <div className="contact__formWrap">
      <h1 className="contact__title">Daj znać co potrzebujesz :)</h1>

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={(values) => {
          const errors = {}

          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          const form = document.querySelector('.contact__formWrap form')
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))

            emailjs
              .sendForm(
                'service_lkksa9m',
                'template_416z4ul',
                form,
                'user_zigbQOKf4glqHQVOsVBIa'
              )
              .then(
                (result) => {
                  console.log(result.text)
                },
                (error) => {
                  console.log(error.text)
                }
              )

            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="contact__inputWrap">
              <Field className="input contact__input" type="text" name="name" />
              <p className="contact__inputTitle">Name</p>
              <ErrorMessage name="name" component="div" />
            </div>
            <div className="contact__inputWrap">
              <Field
                className="input contact__input"
                type="email"
                name="email"
              />
              <p className="contact__inputTitle">Email</p>
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="contact__inputWrap">
              <Field
                className="input contact__input contact__textarea"
                // type="textarea"
                as="textarea"
                rows="10"
                name="message"
              />
              <ErrorMessage name="message" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact
