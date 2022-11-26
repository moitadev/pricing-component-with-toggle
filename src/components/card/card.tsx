export default function Card({ plan, price, storage, users, sendable, className }: {plan: string; price: number; storage: string; users: string; sendable: string; className: string;}) {
    
    return (
        <div className={className}>
            <h4 className="plan-subtitle">{plan}</h4>
            <h1 className="plan-price">{price}</h1>
            <p className="plan-storage">{storage}</p>
            <p className="plan-users">{users}</p>
            <p className="plan-sendable">{sendable}</p>
            <button className="plan-button">Learn More</button>
        </div>
    )
}