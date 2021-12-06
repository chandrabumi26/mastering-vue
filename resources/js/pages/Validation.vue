<template>
    <div class="d-block">
        <form action="">
            <div class="form-group m-2">
                <input v-model.trim="$v.changedata.$model" :class="{'is-invalid':$v.changedata.$error, 
                'is-valid':$v.changedata.$valid}" type="text" class="form-control mb-1" placeholder="Enter text">
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
            <button class="btn btn-success ml-2">Submit</button>
        </form>
    </div>
</template>
<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, minLength, maxLength, sameAs, email} from 'vuelidate/lib/validators'
Vue.use(Vuelidate)
export default {
    data(){
        return{
            changedata : '',
            emaildata : '',
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
        }
    }
}
</script>