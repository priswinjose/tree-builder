<?php

namespace App\Repository;

use App\Entity\MyTree;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * Class MyTreeRepository
 * @package App\Repository
 */
class MyTreeRepository extends ServiceEntityRepository
{
    /**
     * MyTreeRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MyTree::class);
    }
}
