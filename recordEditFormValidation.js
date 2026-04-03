import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountEditForm extends LightningElement {

    @api recordId;
    @api objectApiName;

    handleOnSubmit(event) {
        event.preventDefault();

        const fields = event.detail.fields;
        const phone = fields.Phone;

        // Clean phone (remove spaces, symbols, etc.)
        const cleanPhone = phone ? phone.replace(/\D/g, '') : '';

        // Validation: exactly 10 digits
        if (cleanPhone.length !== 10) {
            this.showToast(
                'Error',
                'Phone number must be exactly 10 digits',
                'error'
            );
            return;
        }

        // Submit form
        this.template
            .querySelector('lightning-record-edit-form')
            .submit(fields);
    }

    handleSuccess() {
        this.showToast('Success', 'Record updated successfully', 'success');
    }

    handleError(event) {
        this.showToast('Error', event.detail.message, 'error');
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}
