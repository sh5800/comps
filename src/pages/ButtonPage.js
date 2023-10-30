import {GoBell,GoCloud,GoCodeOfConduct} from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage(){
    
    return (
        <div>
            <div>
                <Button primary outline rounded className="mb-5">
                    <GoBell/>
                    Click me !!
                </Button>
            </div>

            <div>
                <Button secondary>
                    <GoCloud/>
                    Buy Now!
                </Button>
            </div>

            <div>
                <Button success>
                    <GoCodeOfConduct/>
                    See Deal!
                </Button>
            </div>

            <div>
                <Button warning>Hide Ads!</Button>
            </div>

            <div>
                <Button danger outline>Xyz!</Button>
            </div>
        </div>
    );
}

export default ButtonPage;