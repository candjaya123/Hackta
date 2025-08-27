import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "../components/Newsletter";

export const MailchimpForm = () => {
  // Anda perlu mengganti ini dengan URL Mailchimp Anda sendiri.
  // URL ini bisa didapatkan dari akun Mailchimp Anda di bagian Audience -> Signup Forms -> Embedded forms.
  const postUrl = `https://YOUR_USERNAME.YOUR_SERVER.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}

export default MailchimpForm;
