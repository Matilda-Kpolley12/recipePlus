const User = require('../models/user.model');
const Follow = require('../models/follow.model');
const httpErrors = require("http-errors");

const follow = (req, res) => {

        let follower = req.body.follower;
        let followee = req.params.id;

        let follow = new Follow({
            follower: follower,
            followee: followee,
        });

        follow.save(function (err) {

            if (err) {
                return res.status(404).json({
                    succes: false,
                    status: 404,
                    data: {},
                    message: "There was an error trying follow the user."
                });
            }
            return res.status(200).json({

                success: true,
                status: 200,
                data: follow,
                message: 'Successfully followed user'

            });
        });
    }
    const unfollow = (req, res) => {

        let follower = req.params.followerid;
        let followee = req.params.id;

        Follow.remove({ 'follower': follower, 'followee': followee }, (err, result) => {

            if (err) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    data: {},
                    message: "Error removing record"
                });
            }


            return res.status(201).json({
                success: true,
                status: 201,
                data: {},
                message: "Successfully unfollowed user"
            })

        });
    }
    module.exports ={
        follow,
        unfollow,
    }