<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Repositories\UserRepositoryInterface;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
                    'message' => 'User Created Successfully',

                ]  , 200
            );

        }

        catch(Exception $e) {
            return response()->json(
                [
                    'message' => 'Something Went Wrong',
                    'error' => $e->getMessage()

                ]  , 500
            );
        }

    }

    public function login(Request $request)
    {
        try {

            $credentials = $request->only('email', 'password');

            if (Auth::attempt($credentials)) {
                
                $request->session()->regenerate();
                
                $user = $this->userRepositoryInterface->findByEmail($request->email);

                return response()->json(
                    [
                        'user' => $user,
                        'message' => 'Login Successful'
                    ], 200
                );
            }

            else {
                return response()->json(
                    [
                        'message' => 'Invalid Credentials'
                    ], 401
                );
            }

        }

        catch(Exception $e) {

            return response()->json(
                [
                    'message' => 'Something Went Wrong',
                    'error' => $e->getMessage()

                ]  , 500
            );

        }
    }

    public function logout()
    {
        try {

            Auth::logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();

            return response()->json(
                [
                    'message' => 'Logged Out Successfully'
                ], 200
            );

        }

        catch(Exception $e) {

            return response()->json(
                [
                    'message' => 'Something Went Wrong',
                    'error' => $e->getMessage()

                ]  , 500
            );

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
