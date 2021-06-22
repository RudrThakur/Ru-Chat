<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class ChatController extends Controller
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function contacts(Request $request)
    {
        try {

            $contacts = $this->userRepositoryInterface->all();

            return response()->json(
                [
                    'contacts' => $contacts,
                    'message' => 'Contacts Retrieved Successfully'
                ], 200
            );

        }

        catch(Exception $e){

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
    public function create(Request $request)
    {

        try {
            $request_params = $request->all();
        }
        catch(Exception $e){
            return response()->json(
                [
                    'message' => 'Something Went Wrong',
                    'error' => $e->getMessage()

                ], 500
            );
        }
    }
}
