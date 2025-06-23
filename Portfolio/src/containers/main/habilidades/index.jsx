import React from "react";
import {MyHabilidades, MyIcon} from "./style";
import {Card, ProgressBar} from 'react-bootstrap';
import { Icon } from "@iconify/react";

function habilidades() {
    return(
        <MyHabilidades>
            <div className="habilidades">
                <div className="top">
                    <h1>Habilidades</h1>
                </div>
                <div className="bottom">
                    <ul className="Links"> 
                        <li> 
                           <Card>
                                <MyIcon icon="mdi:language-css3" width="100" height="100" className="css" />
                                <p style={{ textAlign: 'center' }}>CSS</p>
                            </Card>

                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="mdi:language-html5" width="100" height="100" className="html"/> 
                                <p style={{ textAlign: 'center' }}>HTML5</p>
                            </Card>
                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="mdi:language-java" width="100" height="100" className="java"/> 
                                <p style={{ textAlign: 'center' }}>Java</p>
                            </Card>
                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="mdi:language-javascript" width="100" height="100" className="js"/> 
                                <p style={{ textAlign: 'center' }}>JS</p>
                            </Card>
                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="mdi:react" width="100" height="100" className="react"/> 
                                <p style={{ textAlign: 'center' }}>React</p>
                            </Card>
                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="mdi:github" width="100" height="100" className="github"/>
                                <p style={{ textAlign: 'center' }}>GitHub</p> 
                            </Card>
                        </li> 
                        <li> 
                            <Card> 
                                <MyIcon icon="mdi:bootstrap" width="100" height="100" className="boot"/>
                                <p style={{ textAlign: 'center' }}>Bootstrap</p>
                            </Card>
                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="simple-icons:styledcomponents" width="100" height="100" className="styled"/>
                                <p style={{ textAlign: 'center' }}>CSS-in-JS</p>
                            </Card>
                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="simple-icons:figma" width="100" height="100" className="figma"/>
                                <p style={{ textAlign: 'center' }}>Figma</p>
                            </Card>
                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="mdi:database" width="100" height="100" className="sql"/>
                                <p style={{ textAlign: 'center' }}>SQL</p>
                            </Card>
                        </li>
                        <li> 
                            <Card> 
                                <MyIcon icon="simple-icons:postman" width="100" height="100" className="postman"/>
                                <p style={{ textAlign: 'center' }}>Postman</p> 
                            </Card>
                        </li>
                    </ul>
                 </div>
            </div>
        </MyHabilidades>
    );
}

export default habilidades; 