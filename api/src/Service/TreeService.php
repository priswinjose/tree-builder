<?php

namespace App\Service;

use App\Entity\MyTree;
use App\Repository\MyTreeRepository;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class TreeService
 * @package App\Service
 */
class TreeService
{
    /**
     * @var MyTreeRepository
     */
    private $tree;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * TreeService constructor.
     * @param MyTreeRepository $tree
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(MyTreeRepository $tree, EntityManagerInterface $entityManager)
    {
        $this->tree = $tree;
        $this->entityManager = $entityManager;
    }

    /**
     * @param $actionType
     * @param $id
     * @param string $name
     * @param int $parentId
     * @return array
     */
    public function Tree($actionType, $id, string $name, ?int $parentId = null): array
    {
        if ($actionType === 'create') { // Create
            $tree = new MyTree();
            $tree->setParentid($parentId);
        } else { // Update
            $tree = $this->tree->find($id);
        }
        $tree->setName($name);        

        $this->entityManager->persist($tree);
        $this->entityManager->flush();

        return $this->itemToArray($tree);
    }

    /**
     * @param string $name
     * @param int $parentId
     * @return array
     */
    public function createOne(string $name, int $parentId): array
    {
        return $this->Tree('create', $id = null, $name, $parentId);
    }

    /**
     * @param int $id
     * @param string $name
     * @return array
     */
    public function updateOne(int $id, string $name): array
    {
        return $this->Tree('update', $id, $name);
    }

    /**
     * @return array
     */
    public function getAll(): array
    {
        $result = $this->tree->findAll();

        return $this->collectionToArray($result);
    }

    /**
     * @param $elements
     * @param int $parentId
     * @return array
     */
    function buildTree(&$elements, $parentId = 0): array
    {
        $tree = array();

        foreach ($elements as &$element) { //echo "<pre>"; print_r($element); echo "</pre>";

            if ($element['parentId'] == $parentId) {
                $children = $this->buildTree($elements, $element['value']);
                if ($children) {
                    $element['children'] = $children;
                }
                $tree[] = $element;
                unset($element);
            }
        }

        //echo "<pre>"; print_r($tree); echo "</pre>";

        return $tree;
    }

    /**
     * @param $id
     * @return array
     */
    public function getOne($id): array
    {
        $result = $this->tree->find($id);

        return $this->itemToArray($result);
    }

    /**
     * @param $id
     * @return array
     */
    public function removeOne($id)
    {
        $result = $this->tree->find($id);

        $this->entityManager->remove($result);
        $this->entityManager->flush();
    }

    /**
     * @param MyTree $entity
     * @return array
     */
    private function itemToArray($entity): array
    {
        return [
            'id' => $entity->getId(),
            'name' => $entity->getName(),
            'parentId' => $entity->getParentid()
        ];
    }

    /**
     * @param $collection
     * @return array
     */
    private function collectionToArray($collection): array
    {
        $arrayCollection = array();

        foreach ($collection as $item) {
            $arrayCollection[] = array(
                'id' => $item->getId(),
                'name' => $item->getName(),
                'parentId' => $item->getParentid()
            );
        }

        return $arrayCollection;
    }
}