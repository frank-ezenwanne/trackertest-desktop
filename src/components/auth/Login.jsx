import React, { useState } from 'react'

export const Login = () =>{
    return (
        <div>
            <form class="p-4">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email"/>
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password"/>
                </div>

                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}