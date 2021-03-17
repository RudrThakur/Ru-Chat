<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Repositories\UserRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    private UserRepositoryInterface $userRepositoryInterface;

    /**
     * RegisterController constructor.
     * @param UserRepositoryInterface $userRepositoryInterface
     */
    public function __construct(UserRepositoryInterface $userRepositoryInterface)
    {
        $this->userRepositoryInterface = $userRepositoryInterface;
    }

    /**
     * Handle Registration Requests
     *
     * @param RegisterRequest $registerRequest
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $registerRequest)
    {

        try {

            $user = $this->userRepositoryInterface->createUser($registerRequest->all());

            return response()->json(
                [
                    'user' => $user,
                    'status' => 200,
                    'message' => 'User Created Successfully',

                ]  , 200
            );

        }

        catch(Exception $e) {
            return response()->json(
                [
                    'user' => [],
                    'status' => 500,
                    'message' => 'Something Went Wrong',
                    'error' => $e->getMessage()

                ]  , 500
            );
        }

    }

    public function login(Request $request)
    {
        try {

        }

        catch(Exception $e) {

        }
    }

    public function verifyAccount(Request $request)
    {
        try {

        }

        catch(Exception $e) {

        }
    }
}
