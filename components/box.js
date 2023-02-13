const info = [
    {
        id:"0",
        title:"The Young 👦🏻, can turn guidance on how to live life."
    },
    {
        id:"1",
        title:"The Old 👵, can seek wisdom on how to know how to die."
    },
    {
        id:"2",
        title:"The Ignorant 🪬, can find enlightenment and become wise."
    },
    {
        id:"2",
        title:"The Rich 😇, can learn compassion.",
    },
    {
        id:"3",
        title:"The Dreamer 😘, can find enchantment.",
    },
    {
        id:"4",
        title:"The Weak 🪫, can find strength.",
    },
    {
        id:"5",
        title:"The Strength 🔋, can receive direction.",
    },
    {
        id:"6",
        title:"The Humble 🌿, can find exaltation.",
    },
    {
        id:"7",
        title:"The Weary 😩, can find rest.", 
    },
    {
        id:"8",
        title:"The Troubled 🐍, can find peace.", 
    },
    {
        id:"9",
        title:"The Doubting 🤔, can receive assurance.", 
    },
    {
        id:"10",
        title:"The Sinner 👨🏻‍🎤, can find salvation.", 
    },
    {
        id:"11",
        title:"The Seeker 🎢, can achieve Moksha.", 
    },
    {
        id:"12",
        title:"The Human 🚶🏻, can find guidance.", 
    },
]

export default function box(){
    return<>

    <div className='box'>
        <p>Are you looking for guidance in life? Allow the wisdom of Krishna to be your mentor! Our platform, Empowering Your Decision-Making with the Wisdom of Krishna-ai, provides you with a unique opportunity to connect with one of the greatest spiritual teachers of all time. Checkout these</p>
        {
            info.map((item,idx)=>{
                return <li key={idx}>{item.title}</li>
            })
        }
    </div>
    
    <style jsx>
        {`
        .box{
            width:700px;
            min-width:380px;
            background:linear-gradient(45deg,#FA00FF,#031CFE);
        }

        `}
    </style>
    
    
    </>
}