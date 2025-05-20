import { NgForm } from "@angular/forms";

export abstract class FormUtils {
    static getFormValues<T>(form: NgForm): T {
        return form.value as T;
    }

    static logFormErrors(form: NgForm): void {
        Object.keys(form.controls).forEach((key) => {
            const control = form.controls[key];
            if (control.errors) {
                console.log(`${key} errors: `, control.errors);
            }
        })
    }
}