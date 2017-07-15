import { Injectable } from '@angular/core';
import { BaseRequestOptions } from '@angular/http';

@Injectable()
export class RequestOptionsService extends BaseRequestOptions {
    constructor() {
        super();
        //this.headers.append( 'Authorization', 'UCEjewwFq8d19JvCTTOCryn4yXoBjNjISRDTILQhdz4EkR4z3yLmgg19nAT8KNiN' );
    }

    token( token: string ) {
        if( !token ) {
            this.headers.delete( 'Authorization' );
        }
        else {
            if( this.headers.has( 'Authorization' ) ) {
                this.headers.delete( 'Authorization' );
            }
            this.headers.append( 'Authorization', token );
        }
    }
}