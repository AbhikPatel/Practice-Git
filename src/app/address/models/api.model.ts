export class APIResponse {
    public statusCode: number;
    public response: any;

    constructor(
        statusCode: number,
        response: any,
    ) {
        this.statusCode = statusCode;
        this.response = response;
    }
}
