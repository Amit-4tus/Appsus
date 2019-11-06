export default {
    props: ['email'],
    template: `
    <ul class="email" >
    <li class="emailName"> {{email.name}}</li>
    <li class="emailSubject"> {{email.subject}}- {{email.text.substring(0,20)+"..."}}</li>
    <li class="emailSentAt"> {{email.sentAt}}</li>
     </ul>
     `,

    computed: {

    },
}