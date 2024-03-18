const Form = () => {
    return ( 
    <div className="form">
        <h2>Feedback Form</h2>
            <form action="#" method="post">
            <div class="form-group">
                <input type="text" id="form-name" name="name" required placeholder="Name"/>
            </div>
            <div class="form-group">
                <input type="text" id="roll-number" name="roll-number" required placeholder="Roll No."/>
            </div>
            <div class="form-group">
                
                <select id="form-type" name="form-type" required>
                    <option value="" disabled selected>Form Type</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Appreciation">Appreciation</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group-message">
                <textarea placeholder="Message" id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
            </form>
    </div>
     );
}
 
export default Form;