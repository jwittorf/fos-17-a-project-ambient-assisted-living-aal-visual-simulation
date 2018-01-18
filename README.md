* Please follow the following instructions to ensure a correct workflow.
* Also keep this file updated for your own good.
* This is a work in progress document.

# Features/requirements and how to implement them

## Default toggles
Define toggles to be active by default for e.g. devices needing constant electricity

#### What you need:
* Add the id of the toggle's `data-target` to the `defaultTogglesOn` array

#### Example:
```js
defaultTogglesOn = [
    "#kitchen-stove-control-hotplate-two",
    "#kitchen-stove-control-oven-one"
];
```

---------------------------------------


### Exclude toggles from global reset
Define toggles not to be reset by the global reset button, e.g. devices needing constant electricity

#### What you need:
* Add the id of the toggle's `data-target` to the `globalControlResetExclude` array

#### Example:
```js
globalControlResetExclude = [
    "#kitchen-stove-control-hotplate-two"
];
```

---------------------------------------


## Global station
Shows if at least one toggle is active in the specified section

#### What you need:
* On all new `toggle-local-control` elements make sure to follow the markup and add a correct `data-group`.
	* The `data-group` needs to be the same in the entire section!
* That's it, the script will take care of everything else.

#### Example:
```html
<div
class="toggle toggle-light toggle-local-control kitchen-stove-control"
id="kitchen-stove-control-hotplate-one"
data-target="#kitchen-stove-hotplate-one"
data-group="station-group-kitchen"></div>
```

---------------------------------------


## Emergency toggle
* In every section should be an emergency toggle.
* Activating it opens a modal (popup) with a warning message.
* After closing the modal
	* The area starts to blink
	* An entry is added to the log area
* If a different emergency toggle is triggered, the message from the toggle before will still show up in the modal!
* To remove the blinking and the "old" messages from the modal, just disable to activated toggle.
	* There will also be a new entry in the log, claiming the emergency has been resolved.
* 

#### What you need:
* wrapping class: `[section]-emergency-content`
* wrapping id for name/heading: `[section]-emergency-name`
* `toggle` element with
	* class: additional `toggle-local-emergency` 
	* id: `[section]-emergency` 
	* data-name: referring to id from name/heading (2.)
	* data-target: referring to id from content (`[section]-content`) 


#### Example:
```html
<div class="kitchen-emergency-content">
    <div class="row">
        <div class="col-xs-7">
            <div id="kitchen-emergency-name">
                Not-Taster Küche
            </div>
        </div>
        <div class="col-xs-5">
            <div class="toggle toggle-light toggle-local-emergency"
                 id="kitchen-emergency" data-name="#kitchen-emergency-name"
                 data-target="#kitchen-content"></div>
        </div>
    </div>
</div>
```
