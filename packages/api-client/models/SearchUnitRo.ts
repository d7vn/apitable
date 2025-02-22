/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Search Org Unit Request Parameters
*/
export class SearchUnitRo {
    /**
    * Name List
    */
    'names': string;
    /**
    * Association ID: node sharing ID, template ID
    */
    'linkId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "names",
            "baseName": "names",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkId",
            "baseName": "linkId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchUnitRo.attributeTypeMap;
    }

    public constructor() {
    }
}

