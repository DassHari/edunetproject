import React from 'react';


  function CreateAccount() {
    return (
        <div class="registrationcon">
        <div class="registrationinnercon">
            <h1 class="registerhead">Registration</h1>
            <form class="formelement">
                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">Full Name</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your Name" id="nameid" />
                </div>

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">User Name</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your Username" id="nameid" />
                </div>

                <div class="">
                    <h1 class="labelFulname">Gender</h1>
                    <div  class="genderconta">
                    <input type="radio" id="malegender" name="ganderdefault" class="radiobtn" />
                    <label for="malegender" class="genderlabelelement">Male</label>
                    </div>
                    <div class="genderconta">
                    <input type="radio" id="femalegender" name="ganderdefault" class="radiobtn" />
                    <label for="femalegender" class="genderlabelelement">FeMale</label>
                    </div>

                    </div>
                

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">Email</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your Mail" id="nameid" />
                </div>

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">Phone Number</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your Number" id="nameid" />
                </div>

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">Email</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your Mail" id="nameid" />
                </div>

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">Create Password</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your Password" id="nameid" />
                </div>

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">Confirm Password</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Re-Enter Password" id="nameid" />
                </div>

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">Country</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your Country" id="nameid" />
                </div>


                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">State</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your State" id="nameid" />
                </div>

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">District</label>
                    <br />
                    <input type="text" class="registeration_inptelement" placeholder="Enter Your District" id="nameid" />
                </div>

                <div class="formelementcon">
                    <label for="nameid" class="labelFulname">Address</label>
                    <br />
                    <textarea rows="3" cols="45" placeholder="Enter Your Current Address"></textarea>
                </div>

                <div class="createbtncon">
                    <button class="register_createaccbtn">Create Account</button>
                </div>

            </form>
        </div>
    </div>
    );
}



export default CreateAccount;


