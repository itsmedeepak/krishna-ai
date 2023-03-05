
import nodemailer from "nodemailer"


export default async function sendemail(req, res) {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'patalgo.verify@gmail.com',
            pass: 'yimzcflkeutresao',
        },
        secure: true,
    })
    const message = {
        from: 'patalgo.verify@gmail.com',
        to: req.body.email,
        subject: 'TESTING',
        html: `
          <h3> Hello ${req.body.name} </h3>
          <p>Thank you for registering into PATAlgo. Much Appreciated! Just one last step to login, Please verify</p>
        `
    }
    await transporter.sendMail(message, function (err, info) {
        if (err) {
            res(err)
        } else {
            console.log("deepak message")
            res(info)
        }
    })
    res.status(200).json({ message: "ok" })

}
