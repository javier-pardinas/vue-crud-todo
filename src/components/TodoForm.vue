<template>
<!--processTodo-->
    <b-form @submit.prevent="$emit('processTodo', todo)">
        <b-form-group id="todo" label="Todo" label-for="todo">
        <!--:state= manage validation.state of this field. using vuelidate ($v) 
        we check that the validation does not work properly-->
            <b-form-input autocomplete="off" id="todo" 
            v-model="todo.text" :state="!$v.todo.text.$invalid" 
            placeholder="What is your task?" @input="$v.todo.touch">
            </b-form-input><!--@input=everytime we touch that field this gets executed and this gets updated-->
            <!--we show the error of the field of this form as long as 
            v-if="$v.todo.dirty", everytime the input has changed-->
            <b-form-invalid-feedback id="todoInfo" v-if="$v.todo.dirty">
            This field is required
            </b-form-invalid-feedback>
        </b-form-group>
        <!--:disabled="$v.todo.$invalid": if the validation did not finished, then we disable-->
        <b-button type="submit" variant="primary" :disabled="$v.todo.$invalid">
        {{todoSubmit}}
        </b-button>
    </b-form>
</template>

<script>
//validationMixin: group of functionalities that help us work with validation
import { validationMixin } from 'vuelidate';
import {required, minLength} from 'vuelidate/lib/validators';

export default {
    mixins: [validationMixin],
    props: {
        todo: {
            type: Object,
            required: true
        },
        //This is the text of the button
        todoSubmit: {
            type: String,
            default: 'Create Todo'
        }
    },
    //vuelidate offers us this object
    validations: {
        todo: {
            text: {
                required, 
                minLength: minLength(4)
            }
        }
    }
    
}
</script>
