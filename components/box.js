const info = [
    {
        id:"0",
        title:"The Young π¦π», can turn guidance on how to live life."
    },
    {
        id:"1",
        title:"The Old π΅, can seek wisdom on how to know how to die."
    },
    {
        id:"2",
        title:"The Ignorant πͺ¬, can find enlightenment and become wise."
    },
    {
        id:"2",
        title:"The Rich π, can learn compassion.",
    },
    {
        id:"3",
        title:"The Dreamer π, can find enchantment.",
    },
    {
        id:"4",
        title:"The Weak πͺ«, can find strength.",
    },
    {
        id:"5",
        title:"The Strength π, can receive direction.",
    },
    {
        id:"6",
        title:"The Humble πΏ, can find exaltation.",
    },
    {
        id:"7",
        title:"The Weary π©, can find rest.", 
    },
    {
        id:"8",
        title:"The Troubled π, can find peace.", 
    },
    {
        id:"9",
        title:"The Doubting π€, can receive assurance.", 
    },
    {
        id:"10",
        title:"The Sinner π¨π»βπ€, can find salvation.", 
    },
    {
        id:"11",
        title:"The Seeker π’, can achieve Moksha.", 
    },
    {
        id:"12",
        title:"The Human πΆπ», can find guidance.", 
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