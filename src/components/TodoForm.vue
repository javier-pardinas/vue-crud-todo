<template>
    <div>
    </div>
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
