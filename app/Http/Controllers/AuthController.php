<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
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

                ], 200
            );

        } catch (Exception $e) {

            if ($e->getCode() == 23000) {
                return response()->json(
                    [
                        'message' => 'Account Already Exists',
                        'error' => $e->getMessage()

                    ], 500
                );
            } else {
                return response()->json(
                    [
                        'message' => 'Something Went Wrong',
                        'error' => $e->getMessage()

                    ], 500
                );
            }

        }

    }

    /**
     * @param \App\Http\Requests\LoginRequest $loginRequest
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $loginRequest)
    {
        try {

            $credentials = $loginRequest->only('email', 'password');

            if (Auth::attempt($credentials)) {

                $loginRequest->session()->regenerate();

                $user = $this->userRepositoryInterface->findByEmail($loginRequest->email);

                return response()->json(
                    [
                        'user' => $user,
                        'message' => 'Login Successful'
                    ], 200
                );
            } else {
                return response()->json(
                    [
                        'message' => 'Invalid Credentials'
                    ], 401
                );
            }

        } catch (Exception $e) {

            return response()->json(
                [
                    'message' => 'Something Went Wrong',
                    'error' => $e->getMessage()

                ], 500
            );

        }
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
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

        } catch (Exception $e) {

            return response()->json(
                [
                    'message' => 'Something Went Wrong',
                    'error' => $e->getMessage()

                ], 500
            );

        }
    }

    /**
     * @param \Illuminate\Http\Request $request
     */
    public function verifyAccount(Request $request)
    {
        try {

        } catch (Exception $e) {

        }
    }
}
