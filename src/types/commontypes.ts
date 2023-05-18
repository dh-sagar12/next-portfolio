import React from "react"

export interface navbar {
    title: string,
    icon: React.ReactNode
    path: string
}


export interface PersonalInfo{
    Age: number,
    Residence: string,
    Address: string,
    Mail: string,
    Phone: string
}

export interface WhatIDo {
    icon?: React.ReactNode,
    title: string, 
    description: string
}



export interface  Education {
    year: number, 
    subject: string, 
    title: string,
    description: string
}


export interface  Experience {
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

export interface  Project {
    projectImg : string, 
    ProjectName: string,
    projectUrl: string,
    projectCategory: number
}


export interface  ContacInformation {
    redirect: string,
    icon : React.ReactNode
    title : string
}


export interface ContactMe {
    full_name : string, 
    email: string, 
    subject: string, 
    message: string
}


export interface InputError   {
    emailError :  boolean, 
    fullNameError: boolean, 
    messageError : boolean,
    subjectError: boolean
  }