<template>
    <div class="d-block">
        <form action="">
            <div class="form-group m-2">
                <input v-model.trim="$v.changedata.$model" :class="{'is-invalid':$v.changedata.$error, 
                'is-valid':$v.changedata.$valid}" type="text" class="form-control mb-1" placeholder="Enter Username">
                <div class="invalid-feedback">
                    <span v-if="!$v.changedata.required" >Must be eliminated</span>
                    <span v-if="!$v.changedata.minLength" >Enter with atleast 3 letters</span>
                </div>
                <!-- <span class="badge badge-warning">Your Input : {{changedata}}</span> -->
            </div>

            <div class="form-group m-2">
                <input v-model.trim="$v.emaildata.$model" :class="{'is-invalid':$v.emaildata.$error, 
                'is-valid':$v.emaildata.$valid}" type="email" class="form-control mb-1" placeholder="Enter your email">
                <div class="invalid-feedback">
                    <span v-if="!$v.emaildata.required" >Must be eliminated</span>
                    <span v-if="!$v.emaildata.email" >Please Input email format</span>
                </div>
                <!-- <span class="badge badge-warning">Your Input : {{changedata}}</span> -->
            </div>

            <div class="form-group m-2">
                <input v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error, 
                'is-valid':$v.password.$valid}" type="password" class="form-control mb-1" placeholder="Enter your Password">
                <div class="invalid-feedback">
                    <span v-if="!$v.password.required" >Must be eliminated</span>
                    <span v-else-if="!$v.password.minLength" >Enter atleast three characters</span>
                    <span v-else-if="!$v.password.alphaNumAndDotValidator" >Password must contain letters and numeric</span>
                </div>
                <!-- <span class="badge badge-warning">Your Input : {{changedata}}</span> -->
            </div>

            <div class="form-group m-2">
                <input v-model.trim="$v.confirmpassword.$model" :class="{'is-invalid':$v.confirmpassword.$error, 
                'is-valid':$v.confirmpassword.$valid}" type="password" class="form-control mb-1" placeholder="Repeat your password">
                <div class="invalid-feedback">
                    <span v-if="!$v.confirmpassword.required" >Must be eliminated</span>
                    <span v-else-if="!$v.confirmpassword.sameAs" >Your password did not match</span>
                </div>
                <!-- <span class="badge badge-warning">Your Input : {{changedata}}</span> -->
            </div>

            <button class="btn btn-success ml-2">Submit</button>
        </form>
    </div>
</template>
<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, minLength, helpers, sameAs, email} from 'vuelidate/lib/validators'
Vue.use(Vuelidate)
const alphaNumAndDotValidator = helpers.regex('alphaNumAndDotValidator', /^[a-z0-9]+$/i);
export default {
    data(){
        return{
            changedata : '',
            emaildata : '',
            password : '',
            confirmpassword : ''
        }
    },
    validations : {
        changedata : {
            required,
            minLength : minLength(3)
        },
        emaildata : {
            required,
            email
        },
        password : {
            required,
            minLength : minLength(3),
            alphaNumAndDotValidator
        },
        confirmpassword : {
            required,
            sameAs : sameAs('password'),
        }
    }
}
</script>