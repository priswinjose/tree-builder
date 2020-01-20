<?php

namespace App\EventListener;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

/**
 * Class MethodNotAllowedExceptionListener
 * @package App\EventListener
 */
class MethodNotAllowedExceptionListener
{
    /**
     * @param ExceptionEvent $event
     */
    public function onKernelException(ExceptionEvent $event)
    {
        $exception = $event->getThrowable();

        if (!$exception instanceof MethodNotAllowedHttpException) {
            return;
        }

        $response = new JsonResponse([
            'error' => [
                'code' => Response::HTTP_METHOD_NOT_ALLOWED,
                'message' => $exception->getMessage()
            ]
        ]);

        $response->setStatusCode(Response::HTTP_METHOD_NOT_ALLOWED);
        $event->setResponse($response);
    }
}
