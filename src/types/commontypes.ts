import React from "react"

export interface navbar {
    title: string,
    icon: React.ReactNode
    path: string
}


export interface PersonalInfo {
    profile_pic?: string,
    full_name?: string,
    email?: string,
    phone?: string,
    residence_country?: string,
    address?: string,
    age?: number ,
    linkedin?: string,
    github?: string,
    twitter?: string,
    about_me?: string,
    created_on?: string
}


export interface WhatIDo {
    icon?: React.ReactNode,
    title: string,
    description: string
}



export interface Education {
    id?: string, 
    year: string | number,
    subject: string,
    title: string,
    description: string
}


export interface Experience {
    year: string,
    company: string,
    title: string,
    description: string
}


export interface CodingSkills {
    skill: string,
    percentage: number
}


export interface Certification {
    issuerImg: string,
    title: string,
    dateOfComplition: Date,
    certificateId: string
}


export interface ProjectCategories {
    projectCategoryId: number,
    projectCategoryName: string

}

export interface Project {
    projectImg: string,
    ProjectName: string,
    projectUrl: string,
    projectCategory: number
}


export interface ContacInformation {
    redirect: string,
    icon: React.ReactNode
    title: string
}


export interface ContactMe {
    full_name: string,
    email: string,
    subject: string,
    message: string,
    created_on: string
}


export interface InputError {
    emailError?: boolean,
    fullNameError?: boolean,
    messageError?: boolean,
    subjectError?: boolean, 
    passwordError?: boolean
}


export interface SignUpForm {
    full_name: string, 
    email: string, 
    password: string, 
    confirm_password: string
}


export interface LoginForm{
    email: string, 
    password: string
}