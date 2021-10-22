# Frontend: Angular  
# Backend: Spring Boot

As User  
	-Login  
	-Registration  
	-Guest 
Feature  
	-Map  
		-User in area  
		-User category wise  
		-  
	-GPS  
	-Equpments  


All working perfectly!!!
=======================
Search:
1. Address
2. Division
3. District
4. Upazila
===========================

Masterdata API

1. Address API Description:

	1. Description: We can refer only id of Division, District, Upazila as object id shown below.
	   Endpoint: /api/masterdata/geography/address/add
	   Method: POST
	   Perameter:
		{
			"street" : "Kalabagan",
			"postOffice" : "Dhanmondi",
			"postalCode" : "1205",
			"division" : {
				"id" : 55
			},
			"district" : {
				"id": 5527,
                "name": "DINAJPUR"
			},
			"upazila" : {
				"id" : 552710
			}
		}
	   Response Body:
		{
			"id": 902,
			"street": "Kalabagan",
			"postOffice": "Dhanmondi",
			"postalCode": "1205",
			"division": {
			"id": 55,
			"name": "RANGPUR",
			"geocode": null,
			"districts": null
			},
			"district": {
				"id": 5527,
				"name": "DINAJPUR",
				"geocode": "5527",
				"division": null,
				"upazilas": null
			},
			"upazila": {
				"id": 552710,
				"name": "BIRAMPUR",
				"geocode": null,
				"district": null
			},
			"createdOn": "2021-09-15 04:39:37",
			"createdBy": null,
			"modifiedOn": "2021-09-15 04:41:11",
			"modifiedBy": null
		}
		
	2. Description:
	   Endpoint: /api/masterdata/geography/address/get-all
	   Method: GET
	   Response Body:
		[
			{
				"id": 2552,
				"street": "Kalabagan",
				"postOffice": "Dhanmondi",
				"postalCode": "1205",
				"division": {
					"id": 55,
					"name": "RANGPUR",
					"geocode": null,
					"districts": null,
					"hibernateLazyInitializer": {}
				},
				"district": {
					"id": 5527,
					"name": "DINAJPUR",
					"geocode": "5527",
					"division": null,
					"upazilas": null
				},
				"upazila": {
					"id": 552710,
					"name": "BIRAMPUR",
					"geocode": null,
					"district": null
				},
				"createdOn": "2021-09-15 04:30:59",
				"createdBy": null,
				"modifiedOn": "2021-09-15 04:30:59",
				"modifiedBy": null
			},
			{
				"id": 2602,
				"street": "Kalabagan",
				"postOffice": "Dhanmondi",
				"postalCode": "1205",
				"division": {
					"id": 55,
					"name": "RANGPUR",
					"geocode": null,
					"districts": null,
					"hibernateLazyInitializer": {}
				},
				"district": {
					"id": 5527,
					"name": "DINAJPUR",
					"geocode": "5527",
					"division": null,
					"upazilas": null
				},
				"upazila": {
					"id": 552710,
					"name": "BIRAMPUR",
					"geocode": null,
					"district": null
				},
				"createdOn": "2021-09-15 04:34:44",
				"createdBy": null,
				"modifiedOn": "2021-09-15 04:34:44",
				"modifiedBy": null
			}
		]

	3. Description:
	   Endpoint: /api/masterdata/geography/address/get/2652
	   Method: GET
	   Response Body:
		{
			"id": 2652,
			"street": "New Market",
			"postOffice": "Dhanmondi",
			"postalCode": "1205",
			"division": {
				"id": 55,
				"name": "RANGPUR",
				"geocode": null,
				"districts": null
			},
			"district": {
				"id": 5527,
				"name": "DINAJPUR",
				"geocode": "5527",
				"division": null,
				"upazilas": null
			},
			"upazila": {
				"id": 552710,
				"name": "BIRAMPUR",
				"geocode": null,
				"district": null
			},
			"createdOn": "2021-09-15 04:39:37",
			"createdBy": null,
			"modifiedOn": "2021-09-15 04:41:11",
			"modifiedBy": null
		}
	   
	4. Description:
	   Endpoint: /api/masterdata/geography/address/delete/2652
	   Method: DELETE
	   Response Body: Address removed 2652!!
	   
	5. Description: We can refer only id of Division, District, Upazila as object id shown below.
	   Endpoint: /api/masterdata/geography/address/update
	   Method: PUT
	   Perameter:
		{
            "id" : 2652,
			"street" : "New Market",
			"postOffice" : "Dhanmondi",
			"postalCode" : "1205",
			"division" : {
				"id" : 55
			},
			"district" : {
				"id": 5527,
                "name": "DINAJPUR"
			},
			"upazila" : {
				"id" : 552710
			}
		}
	   

2. Division API Description:

	1. Description:
	   Endpoint: /api/masterdata/geography/division/add
	   Method: POST
	   Perameter:
		{
			"id" : 60,
			"name" : "SYLHET"
		}
	   Response Body:
		{
			"id": 60,
			"name": "SYLHET",
			"geocode": "60",
			"districts": null
		}

	2. Description:
	   Endpoint: /api/masterdata/geography/division/add-all
	   Method: POST
	   Perameter:
		[
			{
				"id" : 60,
				"name" : "SYLHET"
			},
			{
				"id" : 55,
				"name" : "RANGPUR"
			}
		]
	   Response Body:
		[
			{
				"id": 60,
				"name": "SYLHET",
				"geocode": "60",
				"districts": null
			},
			{
				"id": 55,
				"name": "RANGPUR",
				"geocode": "55",
				"districts": null
			}
		]
	   
	3. Description:
	   Endpoint: /api/masterdata/geography/division/get-all
	   Method: GET
	   Response Body:
		[
			{
				"id": 55,
				"name": "RANGPUR",
				"geocode": null,
				"districts": [
					{
						"id": 5527,
						"name": "DINAJPUR",
						"geocode": "5527",
						"division": null,
						"upazilas": [
							{
								"id": 552710,
								"name": "BIRAMPUR",
								"geocode": null,
								"district": null
							}
						]
					}
				]
			},
			{
				"id": 60,
				"name": "SYLHET",
				"geocode": null,
				"districts": [
					{
						"id": 6036,
						"name": "HABIGANJ",
						"geocode": "6036",
						"division": null,
						"upazilas": [
							{
								"id": 603602,
								"name": "AJMIRIGANJ",
								"geocode": "603602",
								"district": null
							}
						]
					},
					{
						"id": 6058,
						"name": "HABIGANJ",
						"geocode": "6058",
						"division": null,
						"upazilas": [
							{
								"id": 603605,
								"name": "BAHUBAL",
								"geocode": null,
								"district": null
							}
						]
					}
				]
			}
		]

	4. Description:
	   Endpoint: /api/masterdata/geography/division/get/60
	   Method: GET
	   Response Body:
		{
			"id": 60,
			"name": "SYLHET",
			"geocode": null,
			"districts": [
				{
					"id": 6036,
					"name": "HABIGANJ",
					"geocode": "6036",
					"division": null,
					"upazilas": [
						{
							"id": 603602,
							"name": "AJMIRIGANJ",
							"geocode": "603602",
							"district": null
						}
					]
				},
				{
					"id": 6058,
					"name": "HABIGANJ",
					"geocode": "6058",
					"division": null,
					"upazilas": [
						{
							"id": 603605,
							"name": "BAHUBAL",
							"geocode": null,
							"district": null
						}
					]
				}
			]
		}
		
	5. Description:
	   Endpoint: /api/masterdata/geography/division/delete/55
	   Method: DELETE
	   Response Body: Division removed 55!!
	   
	   
	6. Description:
	   Endpoint: /api/masterdata/geography/division/update
	   Method: PUT
	   Perameter:
		{
			"id": 60,
			"name": "UDVOT PLACE"
		}
	   
	   
	7. Description:
	   Endpoint: /api/masterdata/geography/division/delete-all
	   Method: DELETE
	   Response Body: Successfully delete all entities!!!
	   
	   

3. District API Description:

	1. Description: If we want can pass only division id as object!
	   Endpoint: /api/masterdata/geography/district/add
	   Method: POST
	   Perameter:
		{
			"id" : 6036,
			"name" : "HABIGANJ",
			"division" : {
				"id" : 60,
				"name" : "SYLHET"
			}
		}

	   Response Body:
		{
			"id": 6036,
			"name": "HABIGANJ",
			"geocode": "6036",
			"division": null,
			"upazilas": null
		}

	2. Description: If we want can pass only division id as object!
	   Endpoint: /api/masterdata/geography/district/add-all
	   Method: POST
	   Perameter:
		[
			{
				"id" : 6058,
				"name" : "HABIGANJ",
				"division" : {
					"id" : 60,
					"name" : "SYLHET"
				}
			},
			{
				"id" : 5527,
				"name" : "DINAJPUR",
				"division" : {
					"id" : 55
				}
			}
		]

	   Response Body:
		[
			{
				"id": 6058,
				"name": "HABIGANJ",
				"geocode": "6058",
				"division": null,
				"upazilas": null
			},
			{
				"id": 5527,
				"name": "DINAJPUR",
				"geocode": "5527",
				"division": null,
				"upazilas": null
			}
		]
	   
	3. Description:
	   Endpoint: /api/masterdata/geography/district/get-all
	   Method: GET
	   Response Body:
		[
			{
				"id": 5527,
				"name": "DINAJPUR",
				"geocode": "5527",
				"division": null,
				"upazilas": [
					{
						"id": 552710,
						"name": "BIRAMPUR",
						"geocode": null,
						"district": null
					}
				]
			},
			{
				"id": 6036,
				"name": "HABIGANJ",
				"geocode": "6036",
				"division": null,
				"upazilas": [
					{
						"id": 603602,
						"name": "AJMIRIGANJ",
						"geocode": "603602",
						"district": null
					}
				]
			},
			{
				"id": 6058,
				"name": "HABIGANJ",
				"geocode": "6058",
				"division": null,
				"upazilas": [
					{
						"id": 603605,
						"name": "BAHUBAL",
						"geocode": null,
						"district": null
					}
				]
			}
		]

	4. Description:
	   Endpoint: /api/masterdata/geography/district/get/6058
	   Method: GET
	   Response Body:
		{
			"id": 6058,
			"name": "HABIGANJ",
			"geocode": "6058",
			"division": null,
			"upazilas": [
				{
					"id": 603605,
					"name": "BAHUBAL",
					"geocode": null,
					"district": null
				}
			]
		}
		
	5. Description:
	   Endpoint: /api/masterdata/geography/district/delete/904
	   Method: DELETE
	   Response Body: District removed 904!!
	   
	   
	6. Description:
	   Endpoint: /api/masterdata/geography/district/update
	   Method: PUT
	   Perameter:
		{
			"id": 6058,
			"name": "MAULVIBAZAR"
		}
	 
	   
	7. Description:
	   Endpoint: /api/masterdata/geography/district/delete-all
	   Method: DELETE
	   Response Body: Successfully delete all entities!!!
	   
	   
	   
	   
4. Upazila API Description:

	1. Description: If we want can pass only district id as object!
	   Endpoint: /api/masterdata/geography/upazila/add
	   Method: POST
	   Perameter:
		{
			"id" : 603602,
			"name" : "AJMIRIGANJ",
			"district" : {
				"id" : 6036,
				"name" : "HABIGANJ"
			}
		}
	   Response Body:
		{
			"id": 603602,
			"name": "AJMIRIGANJ",
			"geocode": "603602",
			"district": null
		}

	2. Description: If we want can pass only district id as object!
	   Endpoint: /api/masterdata/geography/upazila/add-all
	   Method: POST
	   Perameter:
		[
			{
				"id" : 603605,
				"name" : "BAHUBAL",
				"district" : {
					"id" : 6058
				}
			},
			{
				"id" : 552710,
				"name" : "BIRAMPUR",
				"district" : {
					"id" : 5527
				}
			}
		]
	   Response Body:
		[
			{
				"id": 603605,
				"name": "BAHUBAL",
				"geocode": null,
				"district": null
			},
			{
				"id": 552710,
				"name": "BIRAMPUR",
				"geocode": null,
				"district": null
			}
		]
	   
	3. Description:
	   Endpoint: /api/masterdata/geography/district/get-all
	   Method: GET
	   Response Body:
		[
			{
				"id": 552710,
				"name": "BIRAMPUR",
				"geocode": null,
				"district": null
			},
			{
				"id": 603602,
				"name": "AJMIRIGANJ",
				"geocode": "603602",
				"district": null
			},
			{
				"id": 603605,
				"name": "BAHUBAL",
				"geocode": null,
				"district": null
			}
		]
		
	4. Description:
	   Endpoint: /api/masterdata/geography/upazila/get/552710
	   Method: GET
	   Response Body:
		{
			"id": 552710,
			"name": "BIRAMPUR",
			"geocode": null,
			"district": null
		}
		
	5. Description:
	   Endpoint: /api/masterdata/geography/upazila/delete/603605
	   Method: DELETE
	   Response Body: Upazila removed 603605!!
	   
	   
	6. Description:
	   Endpoint: /api/masterdata/geography/upazila/update
	   Method: PUT
	   Perameter:
		{
			"id": 552710,
			"name": "WRONG PLACE"
		}		
	   
	7. Description:
	   Endpoint: /api/masterdata/geography/upazila/delete-all
	   Method: DELETE
	   Response Body: Successfully delete all entities!!!
