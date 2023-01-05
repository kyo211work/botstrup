
import { Component, OnInit } from '@angular/core';

export class User {
    constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string
    ) {}
}