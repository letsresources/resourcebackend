import nodemailer from "nodemailer"


const  transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0231b166b704b9",
    pass: "eb73e7e3aed65e"
  }
});


export async function Subscribemail(mail) {
  const info = await transport.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: mail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "Thanks for susbcribing", // html body
  });
  
}