import {useState} from 'react';
export const About = () => {

    const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const[btn, setBtn] = useState('Dark Mode');

    const toggle = ()=>{
        if(myStyle.color == 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtn('Dark Mode');
        }else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setBtn('Light Mode');
        }
    }
    return (
        <>
        <div style={myStyle} className="container my-4">
            <h1>About Us</h1>
            <div style={myStyle} className="accordion" id="accordionExample">
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button style={myStyle} className="accordion-button style={myStyle}" type="button style={myStyle}" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyle} className="accordion-button style={myStyle} collapsed" type="button style={myStyle}" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button style={myStyle} collapsed" type="button style={myStyle}" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className='btn btn-outline-dark' type='submit' onClick={toggle}>{btn}</button>
        </>
    );
}