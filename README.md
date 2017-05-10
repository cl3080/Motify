# Motify

Motify is an AWS-concatenated, NativeScript-powered, fully-scalable movie explorer mobile application with microservices architecture.

  - COMS 6998 Cloud Computing & Big Data Final Project
  - Team **Yulong Qiao yq2212**, **Lan Qing ql2282**, **Min Fan mf3084** and **Xiyan Liu xl2672**

### Features
  - Microservice Architecture
    - Components seperated by business context, communicating using well-defined API
    - Utilize AWS Lambda to depoly backend functions and AWS DynamoDB for data persistence.
    - Apache Spark running on Google Dataproc to implement Machine Learning
  - Hybrid Mobile Application powered by NativeScript
    - Code once, deploy on both iOS and Android.
    - Written using Angular 2 and TypeScript
  - Machine Learning Implementation to toggle movie recommendations for specific user
    - Collaborative Filtering with Matrix Factorization techniques for recommendation
    - Alternating Least Square for parallelized Stochastic Gradient Descent for Spark
 

### Architecture Design

This application is supported with various AWS components:
![Motify Architecture](https://cldup.com/Ir6c51ZDkO.png)
