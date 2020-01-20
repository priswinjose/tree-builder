<?php

namespace App\EventListener;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Class NotFoundExceptionListener
 * @package App\EventListener
 */
class NotFoundExceptionListener
{
    /**
     * @param ExceptionEvent $event
     */
    public function onKernelException(ExceptionEvent $event)
    {
        $exception = $event->getThrowable();

        if (!$exception instanceof NotFoundHttpException) {
            return;
        }
        $response = new JsonResponse([
            'error' => [
                'code' => Response::HTTP_NOT_FOUND,
                'message' => $exception->getMessage()
            ]
        ]);

        $response->setStatusCode(Response::HTTP_NOT_FOUND);
        $event->setResponse($response);
    }
}
