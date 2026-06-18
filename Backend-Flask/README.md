<div align="center">
  <br>
  <h1><b>Express App Registration Template</b></h1>
  <strong>Express JS + MongoDB Back-end</strong>
</div>
<br>

<hr>

![Preview of code editor](docs/readmeImages/App_BE_VScode.jpg)
<hr>

# Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Code and organization](#code-and-organization)
- [Api dococumentation](#api-documentation)
- [Testing](#testing)
- [The App](#the-app)
- [Versioning and external resources](#versioning-and-external-resources)
- [About and license](#about-and-license)
<br>

# Introduction

A Flask backend with email functionality that receives contact form information from a website and sends the message to the admin's email address.

# Installation

<details>
   <summary>1. Clone this repository</summary>

   >\
   > More information on how to clone this repository [available here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
   ><br/><br/>
</details>

<details>
   <summary>2. Create virtual env and install dependencies</summary>

   >\
   > Create a virtual environment:
   > ```pwsh
   >python -m venv env
   >```
   >
   >Then activate the environment with the following command:
   > ```pwsh
   >.\env\Scripts\activate
   >```
   >
   >Then proceed to install the requirements:
   >
   > ```pwsh
   >pip install -r requirements.txt
   >```
   > 
   > If you make changes to the project, you can always update the requirements with
   > 
   > ```pwsh
   >pip freeze > requirements.txt
   >```
   >
   > If you are using VSCode, make sure the correct interpreter is selected.
   > Press `Ctrl + Shift + P` then `Python: Select Interpreter`.
   >
   ><br/><br/>
</details>

<details>
   <summary>3. Create an env file</summary>

   >\
   > You can create a .env file in the root, the content should be similar to that of the .env.example file provided.
   > 
   ><br/><br/>
</details>

<details>
   <summary>4. Run the app</summary>

   >\
   > Run the app.py file
   > ```pwsh
   >python run.py
   >```
   ><br/><br/>
</details>
<br/>

# Code and organization

This is a small project, with a standard folder structure.

## run.py

Is the entry point of the app.
Creates the app with development configurations by default.

## config.py

Contains all the app's configurations: both for development and production.
Global variables are also specified in this file.

## app/__init__

Contains the create_app function and initializes extensions.

## app/routes

Contains the app's only route.

## app/custom_decorator

Contains the decorator for the route which validates json data sent to the api. 

## app/schemas

The JSON Schema used to validate the data against the expected format.


# The App

This is a Flask Backend to receive contact form submissions from a website and send an email to the site's admin with the content of the submission.

## App versions

This is the project's version 1.

## Suggested improvements

Implementation of a rate limiter is recommended.

# About and license

This is a personal project completed by the author, which you are welcome to use and modify at your discretion.

