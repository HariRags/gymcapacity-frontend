const Form = () => {
    return ( 
    <div className="form">
        <h2>Feedback Form</h2>
            <form action="#" method="post">
            <div class="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="form-name" name="name" required/>
            </div>
            <div class="form-group">
                <label htmlFor="roll-number">Roll Number:</label>
                <input type="text" id="roll-number" name="roll-number" required/>
            </div>
            <div class="form-group">
                <label htmlFor="form-type">Form Type:</label>
                <select id="form-type" name="form-type" required>
                <option value="">Select Form Type</option>
                <option value="Complaint">Complaint</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Appreciation">Appreciation</option>
                <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
    </div>
     );
}
 
export default Form;