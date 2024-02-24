import { useForm } from "react-hook-form";
import "./_contact.scss";
import contacts from "../Contact/img/contacts.jpg";

function Contact() {
    const { handleSubmit, register, formState: { errors } } = useForm();

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <div>
            <div className="contact">
            <img src={contacts} alt="contacts" />
            <h2>Contact</h2>
           </div>
           <div className="form">
           <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
     
     <div className="form-item">
         <input
             className={errors.name ? 'error' : ''}
             type="text"
             placeholder="Name"
             {...register("name", {
                 required: "Required",
                 pattern: {
                     value: /^[A-Za-z]+$/i,
                     message: "Incorrect name"
                 }
             })}
         />
         <p className={'error-message'}>{errors.name && errors.name.message}</p>
     </div>
     <div className="form-item">
         <input
             className={errors.email ? 'error' : ''}
             type="email"
             placeholder="Email"
             {...register("email", {
                 required: "Required",
                 pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z](2,)$/i,
                     message: "Invalid email address"
                 }
             })}
         />
         <p className={'error-message'}>{errors.email && errors.email.message}</p>
 </div>
 <div className="form-item">
         <input
             className={errors.subject ? 'error' : ''}
             type="text"
             placeholder="Subject"
             {...register("subject", {
                 required: "Required",
                 pattern: {
                     value: /^[A-Za-z]+$/i,
                     message: "Incorrect subject"
                 }
             })}
         />
         <p className={'error-message'}>{errors.subject && errors.subject.message}</p>
 </div>
 <div className="form-item">
         <textarea
             className={errors.message ? 'error' : ''}
             placeholder="Type Your message"
             rows="5"
             {...register("message", {
                 required: "Required",
                 pattern: {
                     value: /^[A-Za-z]+$/i,
                     message: "Incorrect message"
                 }
             })}
         />
         <p className={'error-message'}>{errors.message && errors.message.message}</p>
 </div>
 <button type="submit">Submit</button>
 </form>
           </div>
        
        </div>
        
    );
}

export default Contact;