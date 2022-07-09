<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdiloController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome',[
            'name' => 'James Bond',
            'email' => 'jamesbond@misix.uk',
            'avatar' => "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        ]);
    }

    public function lists()
    {
        return Inertia::render('RecordList',[
            'name' => 'James Bond',
            'email' => 'jamesbond@misix.uk',
            'avatar' => "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        ]);
    }

    public function mylists()
    {
        $myRecordList = array(
            [ 
                'image' => 'https://adilo.com/images/hdr-1.png', 
                'title' => 'Regional Paradigm Technician', 
                'body'  => 'The video description is shown here if the user added it',
                'view' => '123',
                'size' => '789kb',
                'modified'  => '3 months ago'
            ],
            [ 
                'image' => 'https://adilo.com/images/play-pause.png', 
                'title' => 'Regional Paradigm Technician', 
                'body'  => 'The video description is shown here if the user added it',
                'view' => '123',
                'size' => '789kb',
                'modified'  => '3 months ago'
            ],
            [ 
                'image' => 'https://adilo.com/images/send.png', 
                'title' => 'Regional Paradigm Technician', 
                'body'  => 'The video description is shown here if the user added it',
                'view' => '123',
                'size' => '789kb',
                'modified'  => '3 months ago'
            ],
            [ 
                'image' => 'https://adilo.com/images/recording.png', 
                'title' => 'Regional Paradigm Technician', 
                'body'  => 'The video description is shown here if the user added it',
                'view' => '123',
                'size' => '789kb',
                'modified'  => '3 months ago'
            ],
            [ 
                'image' => 'https://adilo.com/images/hdr-1.png', 
                'title' => 'Regional Paradigm Technician', 
                'body'  => 'The video description is shown here if the user added it',
                'view' => '123',
                'size' => '789kb',
                'modified'  => '3 months ago'
            ],
        );

        return response()->json(['myRecordList' => $myRecordList]);
    }

    public function record()
    {
        return Inertia::render('ScreenView',[
             'name' => 'James Bond',
            'email' => 'jamesbond@misix.uk',
            'avatar' => "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        ]);
    }
}
