export default function BookingForm() {
    return
    <section>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
        <Form>
            <FormField name="name" placeholder="Name*" />
            <FormField name="email" placeholder="Email*" />
            <Datepicker />
            <FormField name="comment" as="textarea" placeholder="Comment" />
            <button type='submit'>
                Send
            </button>
        </Form>
    </section>
}