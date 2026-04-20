
export const UserDetails = ({ 
    name, 
    isOneline, 
    hideOffline,
    isPremium,
    isNewUser,
    role,
}) => {
    if (hideOffline && !isOneline) {
        return null;
    }

    let roleBadge = null;
    if(role === "admin"){
        roleBadge = <span> Cle Admin</span>;
    }else if(role === "moderator"){
        roleBadge = <span>Police Moderator</span>;
    } else if(role === "vip"){
        roleBadge = <span>Diamant VIP</span>
    }
    return (
        <div>
            <h3>
                {name}
                {isPremium && <span>**</span>}
                {isNewUser && <span>++</span>}
                {roleBadge}
            </h3>
            <span>{isOneline ? " Online" : "Offline"}</span>
            <p>{isOneline ? "Available for char" : "Not available"}</p>
            {
                isOneline ? (
                    <button>Send Message</button>
                ) : (
                    <small>Check back later</small>
                )
            }
        </div>
    );
    //     if(isOnline) {
    //         return ( 
    //         <div>
    //             <h3>{name}</h3>
    //             <span>Status : Online</span>
    //             <p>Available for chat</p>
    //             <button>Send Message</button>
    //         </div>
    //      )
    // }

    // return (
    //     <div>
    //         <h3>{name}</h3>
    //         <span>Offline</span>
    //         <p>Not available</p>
    //         <small>Check back later</small>
    //     </div>
    //     )
}

