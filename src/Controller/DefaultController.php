<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Thomas Egain <tegain@altima-agency.com>
 */
class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @return Response
     */
    public function home()
    {
        return $this->render('home/home.html.twig');
    }
}
