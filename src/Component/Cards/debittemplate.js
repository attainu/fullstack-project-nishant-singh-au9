import React from 'react';


const DebitTempelate = (props) => {
    let number = props.data.number
    console.log("templetate >>>>",props.data)
    return (<>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front container">
                    <img class="cardimage" src="https://i.pinimg.com/originals/4d/48/f4/4d48f4fd953e913b7bedcd03662db121.jpg" alt="Avatar" style={{width: "380px", height: "210px"}} />
                    <div className="top-left"><strong>BANK BERG FINANCE</strong></div>
                    <div className="bottom-left">{props.data.name}</div>
                    <div className="top-right">Debit</div>
                    <div className="bottom-right"><img className="card__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/3072px-Former_Visa_%28company%29_logo.svg.png" height="50px" /></div>
                    <div className="centered">{`${number.slice(0,4)} ${number.slice(4,8)} ${number.slice(8,12)} ${number.slice(12,16)}`}<p>expires {props.data.expiry.slice(3,)}</p></div>
                </div>
                <div className="flip-card-back">
                    <div className="stripe"></div>
                    <div className="signature"><span className="cvvspan">{props.data.cvv}</span></div>
                    <div className="cvv"></div>
                    <div><span className="debitbacktext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default DebitTempelate