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

import { AutomationVO } from '../models/AutomationVO';
import { HttpFile } from '../http/http';

export class ResponseDataAutomationVO {
    'success'?: boolean;
    'code'?: number;
    'message'?: string;
    'data'?: AutomationVO;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "AutomationVO",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResponseDataAutomationVO.attributeTypeMap;
    }

    public constructor() {
    }
}

