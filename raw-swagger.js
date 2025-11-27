{
  "openapi": "3.0.0",
  "info": {
    "title": "Jetio API",
    "version": "1.0.0",
    "description": "Auto-generated API documentation by the Jetio Framework."
  },
  "paths": {
    "/docs": {
      "get": {
        "summary": "Serves the Swagger UI HTML page.",
        "tags": [
          "Docs"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": []
      }
    },
    "/openapi.json": {
      "get": {
        "summary": "Serves the auto-generated OpenAPI JSON schema.",
        "tags": [
          "Openapi.Json"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": []
      }
    },
    "/authors": {
      "get": {
        "summary": "No summary",
        "tags": [
          "Authors"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": []
      },
      "post": {
        "summary": "No summary",
        "tags": [
          "Authors"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AuthorCreate"
              }
            }
          }
        }
      }
    },
    "/authors/{item_id}": {
      "get": {
        "summary": "No summary",
        "tags": [
          "Authors"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": [
          {
            "name": "item_id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ]
      },
      "put": {
        "summary": "No summary",
        "tags": [
          "Authors"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": [
          {
            "name": "item_id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AuthorCreate"
              }
            }
          }
        }
      },
      "delete": {
        "summary": "No summary",
        "tags": [
          "Authors"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": [
          {
            "name": "item_id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ]
      }
    },
    "/books": {
      "get": {
        "summary": "No summary",
        "tags": [
          "Books"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": []
      },
      "post": {
        "summary": "No summary",
        "tags": [
          "Books"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BookCreate"
              }
            }
          }
        }
      }
    },
    "/books/{item_id}": {
      "get": {
        "summary": "No summary",
        "tags": [
          "Books"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": [
          {
            "name": "item_id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ]
      },
      "put": {
        "summary": "No summary",
        "tags": [
          "Books"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": [
          {
            "name": "item_id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BookCreate"
              }
            }
          }
        }
      },
      "delete": {
        "summary": "No summary",
        "tags": [
          "Books"
        ],
        "responses": {
          "200": {
            "description": "Successful Response"
          }
        },
        "parameters": [
          {
            "name": "item_id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ]
      }
    }
  },
  "components": {
    "schemas": {
      "AuthorRead": {
        "properties": {
          "id": {
            "default": null,
            "title": "Id",
            "type": "integer"
          },
          "name": {
            "default": null,
            "title": "Name",
            "type": "string"
          },
          "email": {
            "default": null,
            "title": "Email",
            "type": "string"
          }
        },
        "title": "AuthorRead",
        "type": "object"
      },
      "AuthorCreate": {
        "properties": {
          "name": {
            "title": "Name",
            "type": "string"
          },
          "email": {
            "title": "Email",
            "type": "string"
          }
        },
        "required": [
          "name",
          "email"
        ],
        "title": "AuthorCreate",
        "type": "object"
      },
      "BookRead": {
        "properties": {
          "id": {
            "default": null,
            "title": "Id",
            "type": "integer"
          },
          "title": {
            "default": null,
            "title": "Title",
            "type": "string"
          },
          "isbn": {
            "default": null,
            "title": "Isbn",
            "type": "string"
          },
          "author_id": {
            "default": null,
            "title": "Author Id",
            "type": "integer"
          },
          "author": {
            "$ref": "#/components/schemas/AuthorRead",
            "default": null
          }
        },
        "title": "BookRead",
        "type": "object"
      },
      "BookCreate": {
        "properties": {
          "title": {
            "title": "Title",
            "type": "string"
          },
          "isbn": {
            "title": "Isbn",
            "type": "string"
          },
          "author_id": {
            "title": "Author Id",
            "type": "integer"
          }
        },
        "required": [
          "title",
          "isbn",
          "author_id"
        ],
        "title": "BookCreate",
        "type": "object"
      }
    }
  }
}
