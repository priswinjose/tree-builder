# Tree Builder server

This project was generated with Symfony CLI version v4.12.3.

## Development server

Run `Symfony server:start` in `tree-builder/Server/` folder for a dev server. 

* View all nodes:
  - Url:`http://localhost:8000/tree`
  - @Route(methods={"GET"})
  - @return JsonResponse
  
* Create new node
  - Url: `http://localhost:8000/tree`
  - @Route(methods={"POST"})
  - @param Request $request
  - @return JsonResponse
  
* Update a node
  - Url: `http://localhost:8000/tree/{id}`
  - @Route("/{id}", methods={"PUT"})
  - @param Request $request
  - @param $id
  - @return JsonResponse
  
* Remove a node
  - Url: `http://localhost:8000/tree/{id}`
  - @Route("/{id}", methods={"DELETE"})
  - @param $id
  - @return JsonResponse
  
* View a node
  - Url: `http://localhost:8000/tree/{id}`
  - @Route("/{id}", methods={"GET"})
  - @param $id
  - @return JsonResponse

Postman scripts available in file: `Server/Tree API.postman_collection.json`

## Requirements

* PHP 7.3.13 or higher;
* PDO-SQLite PHP extension enabled;
* Doctrine ORM [https://symfony.com/doc/current/doctrine.html];