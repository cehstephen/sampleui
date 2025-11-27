import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import './App.css';

function App() {
  const openApiSpec = {
    "openapi": "3.0.0",
    "info": {
      "title": "Jetio API",
      "version": "1.0.0",
      "description": "Auto-generated API documentation by the Jetio Framework."
    },
    "servers": [
      {
        "url": "http://localhost:8000",
        "description": "Local Development Server"
      }
    ],
    "paths": {
      "/docs": {
        "get": {
          "summary": "Serves the Swagger UI HTML page.",
          "tags": ["Docs"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "text/html": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "parameters": []
        }
      },
      "/openapi.json": {
        "get": {
          "summary": "Serves the auto-generated OpenAPI JSON schema.",
          "tags": ["Openapi.Json"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "parameters": []
        }
      },
      "/authors": {
        "get": {
          "summary": "Get all authors",
          "tags": ["Authors"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AuthorRead"
                    }
                  }
                }
              }
            }
          },
          "parameters": []
        },
        "post": {
          "summary": "Create a new author",
          "tags": ["Authors"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthorRead"
                  }
                }
              }
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
          "summary": "Get author by ID",
          "tags": ["Authors"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthorRead"
                  }
                }
              }
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
          "summary": "Update author by ID",
          "tags": ["Authors"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthorRead"
                  }
                }
              }
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
          "summary": "Delete author by ID",
          "tags": ["Authors"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
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
          "summary": "Get all books",
          "tags": ["Books"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/BookRead"
                    }
                  }
                }
              }
            }
          },
          "parameters": []
        },
        "post": {
          "summary": "Create a new book",
          "tags": ["Books"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BookRead"
                  }
                }
              }
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
          "summary": "Get book by ID",
          "tags": ["Books"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BookRead"
                  }
                }
              }
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
          "summary": "Update book by ID",
          "tags": ["Books"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BookRead"
                  }
                }
              }
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
          "summary": "Delete book by ID",
          "tags": ["Books"],
          "responses": {
            "200": {
              "description": "Successful Response",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
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
  };

  const requestInterceptor = (request) => {
    console.log('Making request to:', request.url);
    
    // Simple request - no authentication headers
    const modifiedRequest = {
      ...request,
      mode: 'cors',
      credentials: 'omit',
    };
    
    // Ensure Content-Type is set for non-GET requests
    if (request.method !== 'GET' && !modifiedRequest.headers['Content-Type']) {
      modifiedRequest.headers['Content-Type'] = 'application/json';
    }
    
    return modifiedRequest;
  };

  const responseInterceptor = (response) => {
    console.log('Response received:', {
      status: response.status,
      url: response.url,
      ok: response.ok
    });
    
    if (!response.ok) {
      console.error('Request failed:', response);
    }
    
    return response;
  };

  return (
    <div className="App">
      <div className="header">
        <h1>📚 Jetio API Documentation</h1>
        <p className="subtitle">Testing Mode - No Authentication Required</p>
      </div>

      <div className="swagger-container">
        <SwaggerUI
          spec={openApiSpec}
          requestInterceptor={requestInterceptor}
          responseInterceptor={responseInterceptor}
        />
      </div>
    </div>
  );
}

export default App;
