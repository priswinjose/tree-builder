<?php
/**
 * TreeController is for managing the tree entries.
 *
 * @author Priswin Jose <priswinjose@gmail.com>
 */

namespace App\Controller;

use App\Service\TreeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
* Class TreeController
*
* @Route("tree")
*/
class TreeController extends AbstractController
{
    /**
     * @var TreeService
     */
    private $treeService;

    /**
     * TreeController constructor.
     * @param TreeService $treeService
     */
    public function __construct(TreeService $treeService)
    {
        $this->treeService = $treeService;
    }

    /**
     * @Route(methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $params = $request->request->all();
        $response = $this->treeService->createOne($params['name'], $params['parentId']);

        return $this->json($response);
    }

    /**
     * @Route("/{id}", methods={"PUT"})
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        $params = $request->request->all();
        $response = $this->treeService->updateOne($id, $params['name'], $params['parentId']);

        return $this->json($response);
    }

    /**
     * @Route(methods={"GET"})
     * @return JsonResponse
     */
    public function getAll(): JsonResponse
    {
        $data = array('text' => '', 'value' => '');

        $response = $this->treeService->getAll();

        $data['children'] = $this->treeService->buildTree($response, $parentId = 0);
        print_r($data); exit;

        return $this->json($responses);
    }

    /**
     * @Route("/{id}", methods={"GET"})
     * @param $id
     * @return JsonResponse
     */
    public function getOne($id): JsonResponse
    {
        $response = $this->treeService->getOne($id);

        return $this->json($response);
    }

    /**
     * @Route("/{id}", methods={"DELETE"})
     * @param $id
     * @return JsonResponse
     */
    public function removeOne($id): JsonResponse
    {
        $response = $this->treeService->removeOne($id);

        return $this->json($response);
    }
}
