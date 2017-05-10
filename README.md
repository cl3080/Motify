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

### Tech Stack
Motify uses multiple technologies to be fruitful:
* [NativeScript with Angular] - Building hybrid mobile application
* [TMDB] - awesome movie database supporting multiple APIs
* [AWS API Gateway] - Management tool for APIs used in this app
* [AWS Lambda] - Serverless. Implement business functions
* [AWS DynamoDB] - Powerful nonrelational database to persist information
* [AWS S3] - sum of AWS storage
* [GCP Dataproc]- Spark environment, great automation support
* [GCP Cloud Storage] - Movie training data rendering
* [Apache Spark] - inplementing Collaborative Filtering with Matrix Factorization

[NativeScript with Angular]:<https://docs.nativescript.org/angular/start/introduction.html>
[TMDB]:<https://www.themoviedb.org/?language=en>
[AWS API Gateway]:<https://aws.amazon.com/api-gateway/>
[AWS Lambda]:<https://aws.amazon.com/lambda/>
[AWS DynamoDB]:<https://aws.amazon.com/dynamodb/>
[AWS S3]:<https://aws.amazon.com/s3/>
[GCP Dataproc]:<>
[GCP Cloud Storage]:<https://cloud.google.com/storage/>
[Apache Spark]:<https://cloud.google.com/dataproc/>
